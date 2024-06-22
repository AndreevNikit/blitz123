import React from "react";

const admin = () => {
    return (
        <div className="container">
            <div className="admin-page">
                <h4>Просмотр брони</h4>
                <form className="form form-login">
                    <div>
                        <div className="input-field col s12">
                            <input 
                            type="text"
                            id="text"
                            name="input"
                            className="validate"
                            />
                            <label htmlFor="input">Место</label>
                        </div>
                    </div>
                    <div className="row">
                <button className="waves-effect waves-light btn white">
                Добавить
                </button>
                    </div>
                </form>
                <h3>Занятые места</h3>
                <div className="todos">
                    <div className="row flex todos-item">
                        <div className="col todos-num">1</div>
                        <div className="col todos-text">text</div>
                        <div className="col todos-buttons">
                            <i class="material-icons green-text">check</i>
                            <i class="material-icons orange-text">warning</i>
                            <i class="material-icons red-text">delete</i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default admin