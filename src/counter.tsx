/// <reference types="./types.d.ts" />

const CounterComponent: React.FunctionComponent<{ count?: number }> = (props) => {
    const [counter, setCounter] = React.useState(props.count ?? 0);
    return (
        <div>
            Client side!
            <button onClick={(e) => setCounter(counter + 1)}>More</button>
            {counter}
        </div>
    );
};

const counters = document.querySelectorAll<HTMLElement>(".wp-block-mytheme-counter");
counters.forEach((el: HTMLElement) => {
    const attrs = JSON.parse(el.dataset.attrs as string);
    ReactDOM.render(<CounterComponent {...attrs} />, el);
});
