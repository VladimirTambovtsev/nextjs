import { useRouter } from 'next/router'

const PortfolioDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return <h1>Portfolio detail with page ID: {id}</h1>
}
export default PortfolioDetail
