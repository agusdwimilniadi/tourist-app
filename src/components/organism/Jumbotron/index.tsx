const Jumbotron = ({ imgUrl, text }: { imgUrl: string; text: string }) => {
  return (
    <section
      style={{
        backgroundImage: ` url("${imgUrl}")`,
      }}
      className=" bg-cover pb-10 h-[40vh] bg-center bg-no-repeat flex flex-col items-center justify-center gap-5 text-white [background-color:rgb(0,0,0] pt-20"
    >
      <h1 className="bg-primary-1 px-5 md:px-10 text-xl text-center md:text-5xl rounded py-2 md:py-4 font-semibold">
        {text}
      </h1>
    </section>
  );
};

export default Jumbotron;
