export const Table = ({ headings, children }) => {
  return (
    <table className='common_table w-full mb-[16px] border-collapse bg-[#fff] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]'>
      <thead>
        <tr>
          {headings.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  )
}
