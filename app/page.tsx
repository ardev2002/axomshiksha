import HomeSidebarServer from "@/components/custom/HomeSidebarServer";
import PostCardsWrapper from "@/components/custom/PostCardsWrapper";
import SubjectFilterClient from "@/components/custom/SubjectFilterClient";

export default function HomePage() {
  return (
    <>
      <SubjectFilterClient/>

      {/* Posts + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 mt-2">
          <PostCardsWrapper />

        <aside className="lg:sticky lg:top-20 lg:self-start">
          <HomeSidebarServer />
        </aside>
      </div>
    </>
  );
}
