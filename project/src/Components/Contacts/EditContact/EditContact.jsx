import React from "react";
import { Link } from "react-router-dom";
let EditContact=()=>{
    return(
        <React.Fragment>
        <section className="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary fw-bold">Edit Contact</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque rerum commodi aliquam non numquam vitae? Dolor ducimus sunt sequi unde reiciendis? Incidunt consequuntur vel blanditiis dignissimos optio impedit dolor!</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <form action="">
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="name" />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Photo URL" />
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="Mobile" />
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Company Name" />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Title" />
                            </div>
                            <div className="mb-2">
                                <select className="form-control">
                                    <option value="">Select a Group</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-primary" value="Update" />
                                <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancle</Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img src="https://tse2.explicit.bing.net/th?id=OIP.e1KNYwnuhNwNj7_-98yTRwHaF7&pid=Api&P=0&h=180" className="contact-img"/>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
};
export default EditContact;