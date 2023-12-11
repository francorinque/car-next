import { deleteSearchParams } from "@/utils"

const ResetButton = () => {
  return (
    <button onClick={deleteSearchParams} type="button">
      ResetButton
    </button>
  )
}
export default ResetButton
