

type Props = {
    children: React.ReactNode;
}

const HeaderText = ({children}: Props) => {
  return (
    <h1
            className="font-motserrat text-3xl font-bold basis-3/5">
                {children}
            </h1>
  )
}

export default HeaderText