package model

type (
	Post struct {
		CreateAblePost
		UpdateAblePost
	}

	CreateAblePost struct {
		Title string `json:"title" binding:"required"`
	}

	UpdateAblePost struct {
		Title string `json:"title"`
	}
)
