document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star-rating .star')

  stars.forEach((star) => {
    star.addEventListener('click', function () {
      const value = parseInt(this.getAttribute('data-value'))
      fillStars(value)
    })
  })

  function fillStars(value) {
    stars.forEach((star) => {
      const starValue = parseInt(star.getAttribute('data-value'))
      if (starValue <= value) {
        star.classList.add('filled')
      } else {
        star.classList.remove('filled')
      }
    })
  }
})
