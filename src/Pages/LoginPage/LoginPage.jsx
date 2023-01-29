export default function Login() {

    return (
        <div>
            <form>
                <label>
                    User e-mail
                </label>
                <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your e-mail"
                    required
                />
                <label>
                    User password
                </label>
                <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                />
                <button type="submit">Click to Login</button>
            </form>

        </div>
    )
};