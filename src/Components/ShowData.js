import React from "react";

function ShowData(props) {
    const studentdata = props.viewData;
    return (
        <div id="showData">
            <h1>Enrolled Student</h1>

            <div className="studentData">
                <div id="header">
                    <h2>Description</h2>
                    <h2>Image</h2>
                </div>
                {studentdata.map((d, index) => (
                    <div key={index} className="data">
                        <div className="student">
                            <div className="details">
                                <h2>{d.name}</h2>
                                <p>{d.gender}</p>
                                <p>{d.email}</p>
                                <p>
                                    <a href={d.website}>{d.website}</a>
                                </p>

                                <p>{d.skills}</p>
                            </div>
                            <div className="image">
                                <img src={d.imageLink} alt="profileImage" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowData;
