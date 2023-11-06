/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const req = new Request('https://example.com/page');

  await fetch(req, {
    next: {
      revalidate: 1000
    }
  });

  await fetch('https://example.com/page2', {
    next: {
      revalidate: 1000
    }
  });

  return <div>Hello</div>
}
