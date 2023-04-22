package encrypt

import (
	"fmt"
	"testing"
)

func TestEncrypt(t *testing.T) {
	e := encryptSign("POST", "/front-manager/api/customer/promotion/appoint")

	d := encryptDigest(`{"activityId":138,"channelId":1}`)

	fmt.Println(e, d)
}
