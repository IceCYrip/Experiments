import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const BasicLogin = () => {
  useEffect(() => {
    document.title = 'Basic Login'

    One()
    Two()
  }, [])

  async function One() {
    await setTimeout(() => {
      console.log('Before')
    }, 2000)
  }
  function Two() {
    console.log('After')
  }

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm()

  const finish = (data) => {
    console.log('Credentials :', data)
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <form name="karan" onSubmit={handleSubmit(finish)}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '10vh',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>LOGIN</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 25,
            }}
          >
            <span style={{ marginRight: 20, fontSize: 'large' }}>
              Username:
            </span>
            <input
              style={{ fontSize: 'large' }}
              type="text"
              {...register('uname')}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 18,
            }}
          >
            <span style={{ marginRight: 20, fontSize: 'large' }}>
              Password:
            </span>
            <input
              style={{ fontSize: 'large' }}
              type="password"
              {...register('pwd')}
            />
          </div>

          <button
            type="submit"
            style={{
              height: 30,
              fontSize: 'large',
              marginRight: 100,
              marginLeft: 100,
              border: '1px solid black',
              borderRadius: 10,
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default BasicLogin
