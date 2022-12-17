export default function Body ({ user }) {
  return (
    <div className='container-fluid px-0 py-0'>
      <div className='row'>
        <div className='col-6'>
          <p>
            <span className='bold'>Email: </span>
            <a className='text-decoration-none black' href={`mailto:${user.email}`} target='_blank' rel='noreferrer'>{user.email}</a>
          </p>
        </div>
        {
                    user.phone && (
                      <div className='col-6'>
                        <span className='bold'>Phone: {user.phone}</span>
                      </div>
                    )
                  }
      </div>
      <div className='row'>
        <div className='col-12'>
          <p>
            <span className='bold'>Mensaje: </span>
            {user.message}
          </p>

        </div>
      </div>
    </div>
  )
}
