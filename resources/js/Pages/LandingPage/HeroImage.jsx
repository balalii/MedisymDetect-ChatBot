export default function HeroImage() {
    return (
        <section className="container flex flex-col-reverse lg:flex-row w-full justify-between lg:items-center ">
            <img
                src="/assets/hero.png"
                className="w-[55rem] h-auto mx-auto"
                alt=""
            />
        </section>
    );
}
