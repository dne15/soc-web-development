import { FoundersData } from "./FoundersCard";

export default function FoundersPage() {
  return (
    <main className="main">
      <section className="orangeBox">
        <h1>Meet the artisans behind our masterpieces!</h1>
        <h2>Mike and Mandy</h2>
        <figure>
          <img src="../images/founder-mike-and-mandy.png"></img>
        </figure>
      </section>
      <FoundersData />
    </main>
  );
}
