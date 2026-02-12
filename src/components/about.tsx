export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-doto font-bold text-neutral-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-neutral-600 font-roboto">
              <p>
                The coffee world is often obscure and hard to navigate. At Dos Tazas, 
                this project was born from a desire to change that narrative.
              </p>
              <p>
                We believe that understanding where your coffee comes from shouldn't be a mystery. 
                Our mission is to make people around the world more aware of the intricate processes 
                in the coffee industry and appreciate the dedication required to produce a truly 
                exceptional cup.
              </p>
              <p>
                From selecting the right beans to the precise roasting methods, we are committed 
                to transparency and quality in every step of the journey.
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square">
               <img
                src="https://placehold.co/800x800?text=Coffee+Process"
                alt="Coffee Brewing Process"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}