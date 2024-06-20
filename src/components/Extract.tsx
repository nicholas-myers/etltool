
const Extract = () => {

    const xmlcode = `
    <contact>
        <id>1</id>
        <fname>Nick</fname>
        <lname>Myers</lname>
        <phone>3608313070</phone>
        <email>korefucius00@gmail.com</email>
    </contact>`

    const jsoncode = `
    {
        "id": 1,
        "firstname": "Nicholas",
        "lastname": "Myers",
        "phoneNumber": "360-831-3070",
        "email": "nicholas.myers.professional@gmail.com"
    }`

    const csvcode = `
    FName,LName,Phone,Email
    Nick,Myers,13608313070,nmyers@resourcedata.com`

    return (
        <div>
            <h2>Source 1: XML example</h2>

            <textarea className="code-block" value={xmlcode} />
            <h2>Source 2: JSON Example</h2>
            <textarea className="code-block" value={jsoncode} />
            <h2>Source 3: CSV Example</h2>
            <textarea className="code-block" value={csvcode}/>

        </div>
    )
}

export default Extract