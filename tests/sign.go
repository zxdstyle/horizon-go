package tests

import (
	"crypto/md5"
	"encoding/base64"
	"fmt"
)

func sign(payload string) string {
	payloadBytes := []byte(payload)
	result := make([]byte, len(payloadBytes))

	arr := []int{55, 146, 68, 104, 165, 61, 204, 127, 187, 15, 217, 136, 238, 154, 233, 90}
	arr1 := []int{56, 48, 51, 48, 54, 102, 52, 51, 55, 48, 98, 51, 57, 102, 100, 53, 54, 51, 48, 97, 100, 48, 53, 50, 57, 102, 55, 55, 97, 100, 98, 54}
	for i := 0; i < len(payloadBytes); i++ {
		w0 := arr[(i-1)&15]
		w6 := w0 ^ int(payloadBytes[i])
		w2 := arr1[(i-1)&7]
		w2 = w6 ^ w2
		w2 = w0 + w2
		w0 = w0 ^ w2
		w2 = arr1[(i-1)&7]
		w0 = w0 ^ w2
		result[i] = byte(w0 & 255)
	}

	src := md5.Sum([]byte(base64.StdEncoding.EncodeToString(result[:])))

	return string(fmt.Sprintf("%x", src))
}
