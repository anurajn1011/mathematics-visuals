from manim import *

class bijection_naturals_integers(Scene):
    def construct(self):
        '''
            First Scene: Initial depiction of the number lines showing how they are, seemingly, 
            not in bijection with one another as the integers looks to cover a larger line.
        '''
        # integers number line
        integers = NumberLine(
            x_range=[-5, 6, 1],
            length=10,
            include_numbers=True,
            include_tip=True,
            label_direction=DOWN,
            font_size=24,
        )
        left_tip_integers = Arrow(
            start=integers.n2p(-5),
            end=integers.n2p(-5) + LEFT * 0.5,
            buff=0,
            stroke_width=3,
            max_tip_length_to_length_ratio=0.75,
            tip_length=10,
            color=integers.get_color()
        )
        integers_label = MathTex(r"\mathbb{Z}")
        integers_label.next_to(integers.n2p(6), UP + UP)

        # defining the naturals number line 
        naturals = NumberLine(
            x_range=[0, 6, 1],
            length=(integers.length/(integers.x_range[1] - integers.x_range[0]) * 6),
            color=RED,
            include_numbers=True,
            include_tip=True,
            label_direction=DOWN,
            font_size=24,
        )
        naturals_label = MathTex(r"\mathbb{N}")
        naturals_label.next_to(naturals.n2p(6), UP + UP)

        # groups of integers and naturals shifted appropriately
        integers_group = VGroup(integers, integers_label, left_tip_integers)
        naturals_group = VGroup(naturals, naturals_label)
        naturals_group.next_to(integers_group, DOWN, buff=1)
        shift_naturals = integers.n2p(0)[0] - naturals.n2p(0)[0]
        naturals_group.shift(RIGHT * shift_naturals)
        line_group = VGroup(integers_group, naturals_group)

        '''
            Second Scene: Depicting the bijection between the integers and naturals
            by rearranging the order of the integers.
        '''

        # rearranging the order of the integers
        rearranged_integers = NumberLine(
            x_range=[0, 11, 1],
            length=10,
            include_numbers=False,
            include_tip=True,
            label_direction=DOWN,
            font_size=24,
        )
        alternating_labels = [0] # constructing the labels in alternating fashion
        for num in range(1, 6):
            alternating_labels.append(num)
            alternating_labels.append(-num)
        labels = VGroup()
        index = 0 # to track where on the line we are
        for label in alternating_labels:
            value = MathTex(str(label)).set(font_size=24)
            value.next_to(rearranged_integers.n2p(index), DOWN)
            labels.add(value)
            index += 1
        rearranged_integers_label = MathTex(r"\mathbb{Z}")
        rearranged_integers_label.next_to(rearranged_integers.n2p(11), UP + UP)
        rearranged_integers_group = VGroup(rearranged_integers, labels, rearranged_integers_label)
        
        shifted_naturals = NumberLine(
            x_range=[0, 11, 1],
            length=10,
            color=RED,
            include_numbers=True,
            include_tip=True,
            label_direction=DOWN,
            font_size=24,
        )
        shifted_naturals_label = MathTex(r"\mathbb{N}")
        shifted_naturals_label.next_to(shifted_naturals.n2p(11), UP + UP)
        shifted_naturals_group = VGroup(shifted_naturals, shifted_naturals_label)

        shifted_naturals_group.next_to(rearranged_integers_group, DOWN, buff=1)

        new_line_group = VGroup(rearranged_integers_group, shifted_naturals_group)
        '''
            Animating the scene
        '''
        # self.add(rearranged_integers_group)
        self.play(Create(integers_group), Create(naturals_group))
        self.wait(3)
        self.play(Transform(integers_group, rearranged_integers_group))
        self.wait(1)
        self.play(Transform(naturals_group, shifted_naturals_group))
        self.wait(3)