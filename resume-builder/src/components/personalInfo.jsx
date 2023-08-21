/* eslint-disable react/prop-types */
export default function PersonalInfo( { updateFirst, updateLast, updatePhone, updateEmail, vals } ) {
    return (
        <div className="inputWrapper">
            <div className="inputPair">
                <label htmlFor="firstname">First name: </label>
                <input onChange={(e) => updateFirst(e)} type="text" name="firstname" id="firstname" value={vals.firstName}/>
            </div>
            <div className="inputPair"><label htmlFor="lastname">Last name: </label><input onChange={(e) => updateLast(e)} type="text" name="lastname" id="lastname" value={vals.lastName}/></div>
            <div className="inputPair"><label htmlFor="phone">Telephone: </label><input onChange={(e) => updatePhone(e)} type="tel" name="phone" id="phone" value={vals.phoneNumber}/></div>
            <div className="inputPair"><label htmlFor="email">Email: </label><input onChange={(e) => updateEmail(e)} type="email" name="email" id="email" value={vals.email}/></div>
        </div>
    )
}