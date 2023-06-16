import Header from "../components/Header";

function DefaultLayout({ content }: any) {
  return ( 
    <>
      <Header />
      {content}
    </>
  );
}

export default DefaultLayout;