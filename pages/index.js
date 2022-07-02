import Home from "../components/Home";

export default Home;

export async function getServerSideProps(context) {
  return {
    props: {
      truths: [
        { id: "1", concept1: "A", link: "B", concept2: "C" },
        { id: "2", concept1: "D", link: "E", concept2: "F" },
        { id: "3", concept1: "G", link: "H", concept2: "I" },
        { id: "4", concept1: "J", link: "K", concept2: "L" },
      ],
    },
  };
}
