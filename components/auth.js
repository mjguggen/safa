import React, {useState} from 'react'

const Auth = props => {
    const enterPword = (e) => {
        e.preventDefault()
        const password = document.getElementById('password').value
        
        if(password !== 'safa2020') {
            return wrongPword()
        } else {
            props.setIsAuthenticated(true)
        }
    }

    const [error, setError] = useState(false)

    const wrongPword = () => {
        setError(true)

        setTimeout(() => {
            setError(false)
        }, 3000)
    }

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div style={{
                textAlign: 'center'
            }}>
                <div> Enter Password to access site</div>
                <form
                    onSubmit={(e) => enterPword(e)}
                >
                    <input 
                        id="password"
                        type="password"
                        style={{
                            width: 150,
                            height: 30,
                            margin: 10,
                            borderRadius: 10,
                            border: '1px solid #20603D',
                            outline: 'none',
                            paddingLeft: 10
                        }}
                    />

                    <input
                        type='submit'
                        className="btn"
                        style={{
                            height: 30,
                            margin: 10,
                            borderRadius: 10,
                            padding: 0,
                            fontSize: 14,
                            fontWeight: 300,
                            paddingLeft: 20,
                            paddingRight: 20,
                            background: 'white',
                            border: '1px solid #20603D',
                            outline: 'none',
                        }}

                        
                    />
                </form>
                <div>
                    {
                        error ? 
                        "Incorrect Password"
                        : ' '
                    }
                </div>
            </div>
        </div>
    )
}

export default Auth