function Members_card({ name, photo, domain }) {
    return (
        <div className="member-card">
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <p>{domain}</p>
        </div>
    );
}
export default Members_card;