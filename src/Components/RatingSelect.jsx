function RatingSelect({ select, selected }) {
    // We don't need local state here, as it's a duplicate of parent state.
    //
    // // Declare selected radio button state and set-state methods.
    // const [selected, setSelected] = useState();

    // // Catch the FeedbackEdit from the FeedbackContext.
    // const {feedbackEdit} = useContext(FeedbackContext);

    // // Effect for showing the rating of an item while in edit mode.
    // useEffect(() => {
    //   setSelected(feedbackEdit.item.rating);
    // }, [feedbackEdit])

    const handleChange = (e) => {
        select(+e.currentTarget.value);
    }

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
              <li key={`rating-${i + 1}`}>
                <input
                  type='radio'
                  id={`num${i + 1}`}
                  name='rating'
                  value={i + 1}
                  onChange={handleChange}
                  checked={selected === i + 1}
                />
                <label htmlFor={`num${i + 1}`}>{i + 1}</label>
              </li>
            ))}
        </ul>
      )
}

export default RatingSelect;
