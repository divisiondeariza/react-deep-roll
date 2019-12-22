import Tone from 'tone'

    // Impulse response from Hamilton Mausoleum http://www.openairlib.net/auralizationdb/content/hamilton-mausoleum
    let reverb = new Tone.Convolver(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/hm2_000_ortf_48k.mp3',
      () => { this.wet = 0.4}
    ).toMaster();

    let samples = {
      C3: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-C4.mp3'
      ),
      'D#3': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-Ds2.mp3'
      ),
      'F#3': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-Fs2.mp3'
      ),
      A3: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-A2.mp3'
      ),
      C4: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-C3.mp3'
      ),
      'D#4': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-Ds3.mp3'
      ),
      'F#4': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-Fs3.mp3'
      ),
      A4: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-A3.mp3'
      ),
      C5: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-C4.mp3'
      ),
      'D#5': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-Ds4.mp3'
      ),
      'F#5': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-Fs4.mp3'
      ),
      A5: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-A4.mp3'
      ),
      C6: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-C5.mp3'
      ),
      'D#6': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-Ds5.mp3'
      ),
      'F#6': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-Fs5.mp3'
      ),
      A6: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/harp-A5.mp3'
      )
    };

    let bassSamples = {
      C0: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/bass-C0.mp3'
      ),
      'D#0': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/bass-Ds0.mp3'
      ),
      'F#0': new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/bass-Fs0.mp3'
      ),
      A0: new Tone.Buffer(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/969699/bass-A0.mp3'
      )
    };

    let sampler = new Tone.Sampler(samples).connect(reverb);
    let echoedSampler = new Tone.Sampler(samples)
      .connect(new Tone.PingPongDelay('16n', 0.8).connect(reverb))
      .connect(reverb);
    let bassSampler = new Tone.Sampler(bassSamples).connect(
      new Tone.Gain(0.6).connect(reverb)
    );
    let bassLowSampler = new Tone.Sampler(bassSamples).connect(
      new Tone.Gain(0.25).connect(reverb)
    );

export {sampler, echoedSampler, bassSampler, bassLowSampler}
