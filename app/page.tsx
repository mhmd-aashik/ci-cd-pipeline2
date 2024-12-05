export default function Home() {
  return (
    <div className="max-w-2xl mx-auto h-screen flex items-center justify-center flex-col py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to CICD with Next.js</h1>
      <article className="mb-6">
        <h2 className="text-2xl font-semibold">Blog Post Title</h2>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
          urna vitae elit pulvinar porttitor. Integer in nunc tempor, sodales
          felis sed, facilisis nulla. Suspendisse potenti. Praesent non eros ac
          justo scelerisque sollicitudin.
        </p>
      </article>
      <article className="mb-6">
        <h2 className="text-2xl font-semibold">Another Blog Post</h2>
        <p className="text-gray-700 mt-2">
          Aliquam erat volutpat. Vivamus et dui sit amet dolor pulvinar
          tincidunt. Ut placerat, arcu in vehicula fringilla, orci massa commodo
          elit, id ullamcorper libero nulla sit amet justo.
        </p>
      </article>
    </div>
  );
}
