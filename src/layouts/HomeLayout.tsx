import Header from "../components/Header";

function HomeLayout({ content }: any) {
  return ( 
    <div style={{width: '100vw'}}>
      <Header />
      <div>
        <img src="myclass.jpeg" alt="myclass" style={{height: '100vh', width: '100vw'}}/>
      </div>
      {content}
    </div>
  );
}

export default HomeLayout;