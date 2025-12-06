"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { Trophy, Clock, RotateCcw, CheckCircle, XCircle } from "lucide-react";
import { formatTimeAgo } from "@/utils/helpers/formatTimeAgo";

// Mock quiz data - in a real app this would come from an API
const MOCK_QUIZ_DATA = {
  id: 1,
  title: "Daily Quiz #125",
  subject: "Mathematics",
  date: new Date().toISOString(),
  timeLimit: 300, // 5 minutes in seconds
  questions: [
    {
      id: 1,
      question: "What is the value of π (pi) approximately?",
      options: ["3.14", "2.71", "1.41", "1.73"],
      correctAnswer: 0,
      explanation: "Pi (π) is a mathematical constant approximately equal to 3.14159."
    },
    {
      id: 2,
      question: "Which of these is a prime number?",
      options: ["15", "21", "23", "27"],
      correctAnswer: 2,
      explanation: "23 is a prime number because it has no divisors other than 1 and itself."
    },
    {
      id: 3,
      question: "What is the formula for the area of a circle?",
      options: ["2πr", "πr²", "πd", "2πr²"],
      correctAnswer: 1,
      explanation: "The area of a circle is calculated using the formula A = πr², where r is the radius."
    },
    {
      id: 4,
      question: "Solve for x: 2x + 5 = 15",
      options: ["x = 5", "x = 10", "x = 7.5", "x = 2.5"],
      correctAnswer: 0,
      explanation: "Subtract 5 from both sides: 2x = 10. Divide by 2: x = 5."
    },
    {
      id: 5,
      question: "What is 15% of 200?",
      options: ["20", "25", "30", "35"],
      correctAnswer: 2,
      explanation: "15% of 200 = (15/100) × 200 = 0.15 × 200 = 30."
    }
  ]
};

export default function DailyQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(MOCK_QUIZ_DATA.timeLimit);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<Array<{questionId: number, selected: number | null, isCorrect: boolean}>>([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const currentQuestion = MOCK_QUIZ_DATA.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / MOCK_QUIZ_DATA.questions.length) * 100;

  // Timer effect
  useEffect(() => {
    if (quizCompleted || isAnswerSubmitted) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, quizCompleted, isAnswerSubmitted]);

  const handleTimeUp = () => {
    // Auto-submit current answer if not answered
    if (selectedOption === null) {
      handleAnswerSelect(null);
    }
    moveToNextQuestion();
  };

  const handleAnswerSelect = (optionIndex: number | null) => {
    setSelectedOption(optionIndex);
    
    // Check if answer is correct
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    // Save answer
    setAnswers(prev => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selected: optionIndex,
        isCorrect
      }
    ]);
    
    setIsAnswerSubmitted(true);
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < MOCK_QUIZ_DATA.questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
        setIsAnswerSubmitted(false);
      }, 1500);
    } else {
      // Quiz completed
      setTimeout(() => {
        setQuizCompleted(true);
      }, 1500);
    }
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null || isAnswerSubmitted) {
      moveToNextQuestion();
    } else if (selectedOption === null) {
      handleAnswerSelect(null); // Skip question
      moveToNextQuestion();
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setTimeLeft(MOCK_QUIZ_DATA.timeLimit);
    setQuizCompleted(false);
    setAnswers([]);
    setIsAnswerSubmitted(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (quizCompleted) {
    return (
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-2 border-violet-500/20 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-yellow-500" />
              </div>
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
              <p className="text-muted-foreground mt-2">
                Daily Quiz #{MOCK_QUIZ_DATA.id}
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-violet-600 mb-2">
                  {score}/{MOCK_QUIZ_DATA.questions.length}
                </div>
                <p className="text-muted-foreground">
                  {score === MOCK_QUIZ_DATA.questions.length 
                    ? "Perfect score! Excellent work!" 
                    : score >= MOCK_QUIZ_DATA.questions.length / 2 
                      ? "Good job! Keep practicing." 
                      : "Keep studying and try again!"}
                </p>
                <div className="text-sm text-muted-foreground mt-2">
                  Completed {formatTimeAgo(MOCK_QUIZ_DATA.date)}
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Review Answers</h3>
                {MOCK_QUIZ_DATA.questions.map((question, index) => {
                  const answer = answers.find(a => a.questionId === question.id);
                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-2 mb-2">
                        {answer?.isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        )}
                        <div>
                          <h4 className="font-medium">{question.question}</h4>
                          <div className="mt-2 text-sm">
                            <p className={answer?.isCorrect ? "text-green-600" : "text-red-600"}>
                              Your answer: {answer?.selected !== null && answer?.selected !== undefined
                                ? question.options[answer.selected] 
                                : "Skipped"}
                            </p>
                            {!answer?.isCorrect && (
                              <p className="text-green-600">
                                Correct answer: {question.options[question.correctAnswer]}
                              </p>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center mt-8">
                <Button onClick={restartQuiz} className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Restart Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  {MOCK_QUIZ_DATA.title}
                </CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">{MOCK_QUIZ_DATA.subject}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {MOCK_QUIZ_DATA.questions.length} Questions
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                <Clock className="h-4 w-4 text-red-500" />
                <span className={`font-mono ${timeLeft < 60 ? "text-red-500" : ""}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
            
            <Progress value={progress} className="mt-4" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestionIndex + 1} of {MOCK_QUIZ_DATA.questions.length}</span>
              <span>Score: {score}</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <motion.h3 
              className="text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={currentQuestion.id}
            >
              {currentQuestion.question}
            </motion.h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                
                let variant = "outline";
                if (isAnswerSubmitted) {
                  if (isSelected && isCorrect) variant = "default";
                  if (isSelected && !isCorrect) variant = "destructive";
                  if (!isSelected && isCorrect) variant = "default";
                } else if (isSelected) {
                  variant = "secondary";
                }
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant={variant as any}
                      className="w-full justify-start h-auto py-4 px-4 text-left whitespace-normal"
                      onClick={() => !isAnswerSubmitted && handleAnswerSelect(index)}
                      disabled={isAnswerSubmitted}
                    >
                      <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </Button>
                  </motion.div>
                );
              })}
            </div>
            
            {isAnswerSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-muted"
              >
                <p className="font-medium mb-2">
                  {selectedOption === currentQuestion.correctAnswer 
                    ? "Correct! 🎉" 
                    : "Incorrect"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
            
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={() => selectedOption !== null && handleNextQuestion()}
                disabled={selectedOption === null && !isAnswerSubmitted}
              >
                {currentQuestionIndex < MOCK_QUIZ_DATA.questions.length - 1 ? "Next Question" : "Finish Quiz"}
              </Button>
              
              {selectedOption === null && !isAnswerSubmitted && (
                <Button
                  variant="ghost"
                  onClick={handleNextQuestion}
                >
                  Skip
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}