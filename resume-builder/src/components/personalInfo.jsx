/* eslint-disable react/prop-types */
export default function PersonalInfo( { updateFirst, updateLast, updatePhone, updateEmail } ) {
    return (
        <div className="form-container">
            <label htmlFor="firstname">First name: </label><input onChange={(e) => updateFirst(e)} type="text" name="firstname" id="firstname" />
            <label htmlFor="lastname">Last name: </label><input onChange={(e) => updateLast(e)} type="text" name="lastname" id="lastname" />
            <label htmlFor="phone">Telephone: </label><input onChange={(e) => updatePhone(e)} type="tel" name="phone" id="phone" />
            <label htmlFor="email">Email: </label><input onChange={(e) => updateEmail(e)} type="email" name="email" id="email" />
        </div>
    )
}