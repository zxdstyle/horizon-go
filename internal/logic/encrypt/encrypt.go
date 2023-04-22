package encrypt

import "github.com/golang-module/dongle"

func encryptSign(method, path string) string {
	sk := "492e1140b9c94667fb3d0dcc467ad6a1"
	ak := "a580f37df628192608f3e65b7a18ae5d"
	i := method + "\n" + path + "\n\n" + ak + "\n\n"
	return dongle.Encrypt.FromString(i).ByHmacSha256(sk).ToBase64String()
}

func encryptDigest(body string) string {
	sk := "492e1140b9c94667fb3d0dcc467ad6a1"
	return dongle.Encrypt.FromString(body).ByHmacSha256(sk).ToBase64String()
}
