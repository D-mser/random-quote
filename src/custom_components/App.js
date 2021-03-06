import DataFetcher from "./DataFetcher";
import CardHolder from "./CardHolder";

export default function App() {
  return (
    <>
      <DataFetcher url="https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json">
        {({ data, status }) => {
          return <CardHolder data={data} status={status} />;
        }}
      </DataFetcher>
    </>
  );
}
