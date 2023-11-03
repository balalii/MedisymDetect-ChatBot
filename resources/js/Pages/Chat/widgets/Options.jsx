const Options = (props) => {
    return (
        <div className="options">
            <div className="flex flex-col md:flex-row justify-between  items-center md:px-7 mb-8">
                {props.options.map((option) => {
                    return (
                        <div
                            className="bg-secondary border border-gray mb-5 mx-2 p-4 flex-1 text-black rounded-xl cursor-pointer hover:bg-black/5 transition-all"
                            onClick={option.handler}
                            key={option.id}
                        >
                            <p className="font-bold"> {option.name}</p>
                            <span className="text-black/80 line-clamp-1">
                                {option.desc}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Options;
