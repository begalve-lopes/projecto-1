import './styles.css'

export const TextInput = ({ searchValue, handleChenge }) => {
    return (
        <input
            type="search"
            value={searchValue}
            onChange={handleChenge}
            className='text-input'
            placeholder='Type your search'
        />
    )
}