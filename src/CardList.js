import CardUI from "./CardUI";

function CardList() {
    const name = "ReactJS";
    const college = "SVECW";
    const userobj = { name: "Harika", branch: "CSM", year: "3" };
    const users = ["Harika", "Nikitha", "Sowjanya", "Arshiya", "Madhu", "varshita"];
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}> {
            users.map((user, index) => (
                <CardUI key={index}
                    program={name}
                    col={college}
                    user={userobj}
                    userFromArray={user} />
            ))
        }
        </div>
    );
}
export default CardList;