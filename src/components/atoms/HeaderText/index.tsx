const HeaderText = ({ text }: { text: string }) => {
  return (
    <section className="w-full text-center my-5 md:my-10">
      <h1 className="text-xl md:text-3xl font-semibold text-primary-2">
        {text}
      </h1>
    </section>
  );
};

export default HeaderText;
