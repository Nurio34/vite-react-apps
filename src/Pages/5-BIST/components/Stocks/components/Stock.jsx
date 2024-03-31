function Stock({ stock }) {
    const { id, name } = stock;

    return (
        <article>
            <h2 className="Header" style={{ fontVariant: "small-caps" }}>
                {id} ({name})
            </h2>
            <div></div>
        </article>
    );
}

export default Stock;
