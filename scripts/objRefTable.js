const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Particles,
		C3.Behaviors.Physics,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{cruz: 0},
	{mapa: 0},
	{tesoro: 0},
	{FondoEnMosaico: 0},
	{play: 0},
	{Titulo: 0},
	{ControlTáctil: 0},
	{TextoInformacion: 0},
	{Audio: 0},
	{Sprite: 0},
	{Físicas: 0},
	{Partículas: 0},
	{distancia: 0},
	{intentos: 0},
	{estado: 0}
];

self.InstanceType = {
	cruz: class extends self.ISpriteInstance {},
	mapa: class extends self.ISpriteInstance {},
	tesoro: class extends self.ISpriteInstance {},
	FondoEnMosaico: class extends self.ITiledBackgroundInstance {},
	play: class extends self.ISpriteInstance {},
	Titulo: class extends self.ITextInstance {},
	ControlTáctil: class extends self.IInstance {},
	TextoInformacion: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Partículas: class extends self.IParticlesInstance {}
}