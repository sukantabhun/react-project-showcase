import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onSelectTabBtn} = props
  const {tabId, displayText} = tabDetails
  const activeTabClass = isActive ? 'active-tab-btn' : ''
  const onClickBtn = () => {
    onSelectTabBtn(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onClickBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
