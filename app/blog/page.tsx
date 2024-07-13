import BlogSearch from "./_components/blog-search";
import BlogList from "./_components/blog-list";

export const POSTS_PER_PAGE = 5; // TODO: Make 10 when total blogs exceed 10

type BlogsPageProps = {
  searchParams: {
    page?: string;
  };
};

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="container mx-auto mt-8 max-w-4xl px-8 pb-6 pt-12 sm:px-0 md:mt-0 lg:pb-10 lg:pt-20">
      <section className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex flex-1 flex-col items-start gap-4">
          <h1 className="inline-block text-4xl font-bold lg:text-5xl">
            Avaneesh's Blog
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            I occasionally blog about my experiences and insights in coding and
            productivity.
          </p>
          <BlogSearch />
        </div>
      </section>
      <hr className="mt-8" />
      <BlogList currentPage={currentPage} />
    </main>
  );
}
