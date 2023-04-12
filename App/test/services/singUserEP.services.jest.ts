import { signInWithEmailAndPassword } from "firebase/auth";
import { applicationInfo } from "../../src/interceptors";
test("test de mi primera funcion", () => {
	return applicationInfo("sebas", "1234567", signInWithEmailAndPassword).then(
		(res) => {
			expect(res).toBe({
				ok: true,
				email: "sebas@gmail.com",
				id: "",
				message: "success",
			});
		},
	);
});
