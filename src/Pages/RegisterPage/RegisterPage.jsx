export default function Registration() {

    return (
        <div>
            <form>
                <label>
                    User Name
                </label>
                <input
                    type="text"
                    name="name"
                    autoComplete="username"
                    title="Enter your Name"
                    placeholder="Enter your Name"
                    required
                />
                <label>
                    User e-mail
                </label>
                <input
                    type="email"
                    name="email"
                    autoComplete="username"
                    title="Enter valid E-Mail"
                    placeholder="Enter valid E-Mail"
                    required
                />
                <label>
                    User password
                </label>
                <input
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    title="Enter minimum 7 simbols"
                    placeholder="Enter your password"
                    required
                />
                <button type="submit">Click to register</button>
            </form>
        </div>
    )
};