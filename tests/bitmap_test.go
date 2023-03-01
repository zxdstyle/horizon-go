package tests

import (
	"fmt"
	"github.com/RoaringBitmap/roaring"
	"testing"
)

func TestBitmap(t *testing.T) {
	rb := roaring.BitmapOf(1, 2, 3, 4, 9999, 99999999)
	fmt.Println(rb.String())
}
