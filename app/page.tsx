import HomeSidebarServer from "@/components/custom/HomeSidebarServer";
import SubjectFilteredPosts from "@/components/custom/SubjectFilteredPosts";
import DefaultPostsWrapper from "@/components/custom/DefaultPostsWrapper";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-6">
      <div className="min-w-0">
        <SubjectFilteredPosts>
          <DefaultPostsWrapper />
        </SubjectFilteredPosts>
      </div>
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <HomeSidebarServer />
      </aside>
    </div>
  );
}
