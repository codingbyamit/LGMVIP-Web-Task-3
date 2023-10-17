import React, { useRef, useState } from "react";

function StudentInput(props) {
    const [studentDataList, setStudentDataList] = useState([]);
    const [studentData, setStudentData] = useState({
        name: "",
        email: "",
        website: "",
        imageLink: "",
        gender: "",
        skills: [],
    });
    function clearData(e) {
        e.preventDefault();
        setStudentData((d) => {
            return {
                ...d,
                name: "",
                email: "",
                website: "",
                imageLink: "",
                gender: "",
                skills: [],
            };
        });
        console.log(inputForm.current);

        inputForm.current.reset();
    }
    const inputForm = useRef();
    function submitData(e) {
        e.preventDefault();
        setStudentDataList([...studentDataList, studentData]);
    }
    props.getData(studentDataList);

    function handleChange(e) {
        const { value, checked } = e.target;
        if (checked === true) {
            setStudentData((d) => {
                return { ...d, skills: [...d.skills, value] };
            });
            console.log(e.target);
        } else {
            const sk = studentData.skills;
            const filterskills = sk.filter((e) => e !== value);
            setStudentData((d) => {
                return { ...d, skills: filterskills };
            });
        }
    }

    // console.log(studentData);

    return (
        <div id="studentInput">
            <form ref={inputForm}>
                <div className="text">
                    <label htmlFor="name">Name</label>
                    <label htmlFor="email">Email</label>
                    <label htmlFor="website">Website</label>
                    <label htmlFor="imagelink">Image Link</label>
                </div>
                <div className="inputs">
                    <input
                        onChange={(e) => {
                            setStudentData((d) => {
                                return { ...d, name: e.target.value };
                            });
                        }}
                        type="text"
                        id="name"
                        required
                    />
                    <input
                        onChange={(e) => {
                            setStudentData((d) => {
                                return { ...d, email: e.target.value };
                            });
                        }}
                        type="text"
                        id="email"
                        required
                    />
                    <input
                        onChange={(e) => {
                            setStudentData((d) => {
                                return { ...d, website: e.target.value };
                            });
                        }}
                        type="text"
                        id="website"
                    />
                    <input
                        onChange={(e) => {
                            setStudentData((d) => {
                                return { ...d, imageLink: e.target.value };
                            });
                        }}
                        type="text"
                        id="imagelink"
                        required
                    />
                </div>
                <div className="gender">
                    <div>
                        <label htmlFor="gender">Gender</label>
                    </div>
                    <div className="radioInput">
                        <label htmlFor="male">
                            <input
                                onClick={(e) => {
                                    setStudentData((d) => {
                                        return { ...d, gender: e.target.value };
                                    });
                                }}
                                value={"male"}
                                type="radio"
                                name="gender"
                                id="male"
                            />
                            Male
                        </label>
                        <br />

                        <label htmlFor="female">
                            <input
                                onClick={(e) => {
                                    setStudentData((d) => {
                                        return { ...d, gender: e.target.value };
                                    });
                                }}
                                value={"female"}
                                type="radio"
                                name="gender"
                                id="female"
                            />
                            Female
                        </label>
                    </div>
                </div>
                <div className="skills">
                    <div>
                        <label htmlFor="skills">Skills</label>
                    </div>
                    <div className="skillCheckbox">
                        <input
                            onChange={handleChange}
                            type="checkbox"
                            name="skill"
                            id="html"
                            value={"HTML "}
                        />
                        <label htmlFor="html">HTML</label>
                        <input
                            onChange={handleChange}
                            type="checkbox"
                            name="skill"
                            id="css"
                            value={"CSS "}
                        />
                        <label htmlFor="css">CSS</label>
                        <input
                            onChange={handleChange}
                            type="checkbox"
                            name="skill"
                            id="java"
                            value={"JAVA "}
                        />
                        <label htmlFor="java">JAVA</label>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={submitData}>Enroll Student</button>
                    <button onClick={clearData}>Clear</button>
                </div>
            </form>
        </div>
    );
}

export default StudentInput;
