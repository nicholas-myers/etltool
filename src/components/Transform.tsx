interface ContactInfo {
    id: string,
    firstName: string,
    lastName: string,
    phone: number,
    email: string,
}

const Transform = ({ data }: { data: ContactInfo }) => {
    return (
        <div>
            1. assign datatypes and sources
            <div className="code-block">
                <p>id: alphanumeric - string - first character of first name, last name, and last four of phone number</p>
                <p>firstName: string - Source: JSON</p>
                <p>lastName: string - Source: CSV</p>
                <p>phone: number - Source: XML</p>
                <p>email: string - Source: XML</p>
            </div>
            2. resulting object
            <div className="code-block">
                <p>{`{`}</p>
                <p>id: {data.id}</p>
                <p>firstName: {data.firstName}</p>
                <p>lastName: {data.lastName}</p>
                <p>phone: 3608313070</p>
                <p>email: korefucius00@gmail.com</p>
                <p>{`}`}</p>
            </div>
        </div>
    )
}

export default Transform