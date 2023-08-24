/* eslint-disable react/prop-types */
export default function PersonalInfo( { updateFirst, updateLast, updatePhone, updateEmail, vals } ) {
    return (
        <div className="inputWrapper">
            <label htmlFor="firstname">First name </label>
            <input onChange={(e) => updateFirst(e)} type="text" name="firstname" id="firstname" value={vals.firstName}/>

            <label htmlFor="lastname">Last name </label>
            <input onChange={(e) => updateLast(e)} type="text" name="lastname" id="lastname" value={vals.lastName}/>

            <label htmlFor="phone">Telephone </label>
            <input onChange={(e) => updatePhone(e)} type="tel" name="phone" id="phone" value={vals.phoneNumber}/>

            <label htmlFor="email">Email </label>
            <input onChange={(e) => updateEmail(e)} type="email" name="email" id="email" value={vals.email}/>
        </div>
    )
}