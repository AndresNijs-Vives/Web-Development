const VoegNaamToe = (family) => {
    let newFamilyMember = prompt("Please enter your name");
    console.log(newFamilyMember);
    family.push(newFamilyMember);
}

const setup = () => {
    let family = ["member1", "member2", "member3", "member4", "member5"];
    console.log(family.length);
    for (let i = 0; i <= 5; i += 2) {
        console.log("member " + family[i]);
    }
    VoegNaamToe(family);
    console.log(family.join(" - "));
}
window.addEventListener("load", setup);