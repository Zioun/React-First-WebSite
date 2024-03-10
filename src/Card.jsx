export default function Card({ card }) {
    return (
      <div className="card card-compact w-52 bg-base-100 shadow-xl md:col-span-4 lg:col-span-3 2xl:col-span-2 m-auto">
        <figure>
          <img src={card.url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">{card.title}</h2>
          <img src={card.thumbnailUrl} alt="Shoes" />
        </div>
      </div>
    );
  }