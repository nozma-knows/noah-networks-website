import Page from "../page/Page";

const errorMessage = `You've encountered an unexpected error.`;

export default function ErrorPage({ token }: { token: string }) {
  return (
    <Page>
      <div className="flex flex-col gap-8 w-full h-full justify-center items-center">
        <h1 className="text-secondary-light">{errorMessage}</h1>
      </div>
    </Page>
  );
}
